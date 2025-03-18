const module = await import('@/utils/repository.ts');

console.log(module.default.set('test', 'test'))