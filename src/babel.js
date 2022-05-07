async function start() {
  const resolve = await Promise.resolve('async is working');
  return resolve;
}

start().then(console.log);
