using System;
using System.Collections.Generic;
using System.Diagnostics;

class Program
{
    static List<int> SieveOfEratosthenes(int limit)
    {
        if (limit < 2) return new List<int>();
        
        // Initialize boolean array
        bool[] isPrime = new bool[limit + 1];
        for (int i = 0; i <= limit; i++)
            isPrime[i] = true;
        
        isPrime[0] = isPrime[1] = false;
        
        // Sieve algorithm
        for (int i = 2; i * i <= limit; i++)
        {
            if (isPrime[i])
            {
                for (int j = i * i; j <= limit; j += i)
                {
                    isPrime[j] = false;
                }
            }
        }
        
        // Collect primes
        List<int> primes = new List<int>();
        for (int i = 2; i <= limit; i++)
        {
            if (isPrime[i])
                primes.Add(i);
        }
        
        return primes;
    }
    
    static long FibonacciIterative(int n)
    {
        if (n <= 1) return n;
        
        long a = 0, b = 1;
        for (int i = 2; i <= n; i++)
        {
            long temp = a + b;
            a = b;
            b = temp;
        }
        
        return b;
    }
    
    static int[,] MatrixMultiplication(int size)
    {
        // Create matrices with simple values
        int[,] matrixA = new int[size, size];
        int[,] matrixB = new int[size, size];
        
        for (int i = 0; i < size; i++)
        {
            for (int j = 0; j < size; j++)
            {
                matrixA[i, j] = i + j;
                matrixB[i, j] = i * j + 1;
            }
        }
        
        // Matrix multiplication
        int[,] result = new int[size, size];
        
        for (int i = 0; i < size; i++)
        {
            for (int j = 0; j < size; j++)
            {
                for (int k = 0; k < size; k++)
                {
                    result[i, j] += matrixA[i, k] * matrixB[k, j];
                }
            }
        }
        
        return result;
    }
    
    static void RunBenchmarks()
    {
        Console.WriteLine("C# Performance Benchmark");
        Console.WriteLine("========================================");
        
        Stopwatch stopwatch = new Stopwatch();
        
        // Benchmark 1: Prime Sieve
        Console.WriteLine("1. Prime Sieve (up to 100,000)");
        stopwatch.Start();
        var primes = SieveOfEratosthenes(100000);
        stopwatch.Stop();
        Console.WriteLine($"   Found {primes.Count} primes in {stopwatch.Elapsed.TotalSeconds:F4} seconds");
        
        // Benchmark 2: Fibonacci
        Console.WriteLine("2. Fibonacci (40th number)");
        stopwatch.Restart();
        long fibResult = FibonacciIterative(40);
        stopwatch.Stop();
        Console.WriteLine($"   Result: {fibResult} in {stopwatch.Elapsed.TotalSeconds:F4} seconds");
        
        // Benchmark 3: Matrix Multiplication
        Console.WriteLine("3. Matrix Multiplication (200x200)");
        stopwatch.Restart();
        var matrixResult = MatrixMultiplication(200);
        stopwatch.Stop();
        Console.WriteLine($"   Completed in {stopwatch.Elapsed.TotalSeconds:F4} seconds");
        
        // Overall timing
        stopwatch.Restart();
        
        // Run all tests together for total time
        SieveOfEratosthenes(100000);
        FibonacciIterative(40);
        MatrixMultiplication(200);
        
        stopwatch.Stop();
        Console.WriteLine($"\nTotal execution time: {stopwatch.Elapsed.TotalSeconds:F4} seconds");
    }
    
    static void Main(string[] args)
    {
        RunBenchmarks();
        
        // Keep console open
        Console.WriteLine("\nPress any key to exit...");
        Console.ReadKey();
    }
}