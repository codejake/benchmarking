# Prime Sieve

The tests were run several times. The below runs are decent averages.

## Testing Host

Note: I bet these tests would look a lot different on Linux.

```
❯ uname -a      
Darwin jakes-mbp 25.0.0 Darwin Kernel Version 25.0.0: Mon Aug 25 21:17:51 PDT 2025; root:xnu-12377.1.9~3/RELEASE_ARM64_T6020 arm64
```

## Python

```
❯ python3 ./prime-sieve.py
Python Performance Benchmark
========================================
1. Prime Sieve (up to 100,000)
   Found 9592 primes in 0.0050 seconds
2. Fibonacci (40th number)
   Result: 102334155 in 0.0000 seconds
3. Matrix Multiplication (200x200)
   Completed in 0.3724 seconds

Total execution time: 0.3698 seconds
```

## TypeScript with Bun

```
❯ bun ./prime-sieve.ts
TypeScript Performance Benchmark
========================================
1. Prime Sieve (up to 100,000)
   Found 9592 primes in 0.0058 seconds
2. Fibonacci (40th number)
   Result: 102334155 in 0.0000 seconds
3. Matrix Multiplication (200x200)
   Completed in 0.0325 seconds

Total execution time: 0.0185 seconds
```

## DotNet 10
```
❯ dotnet run ./prime-sieve.cs
C# Performance Benchmark
========================================
1. Prime Sieve (up to 100,000)
   Found 9592 primes in 0.0011 seconds
2. Fibonacci (40th number)
   Result: 102334155 in 0.0000 seconds
3. Matrix Multiplication (200x200)
   Completed in 0.0390 seconds

Total execution time: 0.0398 seconds
```                                                                                                               
