# Prime Sieve

The tests were run several times. The below runs are decent averages.

## Testing Host

Note: I bet these tests would look a lot different on Linux.

Tests executed on macOS 26.0 on Apple Silicon MacBook Pro with M2 Pro.

Note: Ordered from fastest to slowest.

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

## Dotnet 10 RC (Release)
```
❯ dotnet run -c Release prime-sieve.cs
C# Performance Benchmark
========================================
1. Prime Sieve (up to 100,000)
   Found 9592 primes in 0.0011 seconds
2. Fibonacci (40th number)
   Result: 102334155 in 0.0001 seconds
3. Matrix Multiplication (200x200)
   Completed in 0.0206 seconds

Total execution time: 0.0205 seconds
```


## DotNet 10 (Debug)
```
❯ dotnet run -c Debug ./prime-sieve.cs
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