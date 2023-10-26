export interface IJob {
  (): Promise<number>;
}

export class Parallel {
  private readonly threads;

  private readonly result: number[] = [];

  constructor(n: number) {
    this.threads = n;
  }

  async jobs(...args: IJob[]): Promise<number[]> {
    const jobs = [...args];
    const executingJobs: Promise<number>[] = [];

    while (jobs.length > 0 && executingJobs.length < this.threads) {
      const currentJob = jobs.shift();
      if (currentJob) {
        const jobPromise = currentJob();
        executingJobs.push(jobPromise);
        jobPromise.then(() => {
          executingJobs.splice(executingJobs.indexOf(jobPromise), 1);
        });
      }
    }
    /* eslint-disable no-await-in-loop */
    while (executingJobs.length > 0) {
      const finishedJob = await Promise.race(executingJobs);
      this.result.push(finishedJob);
      if (jobs.length > 0) {
        const currentJob = jobs.shift();
        if (currentJob) {
          const jobPromise = currentJob();
          executingJobs.push(jobPromise);
          jobPromise.then(() => {
            executingJobs.splice(executingJobs.indexOf(jobPromise), 1);
          });
        }
      }
    }

    return this.result;
  }
}

const runner = new Parallel(2);
(async () => {
  console.log(
    await runner.jobs(
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5))
    )
  );
})(); // [1, 3, 2, 5, 4]
