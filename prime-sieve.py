import time
import math


def sieve_of_eratosthenes(limit):
    """Generate all prime numbers up to limit using Sieve of Eratosthenes"""
    if limit < 2:
        return []

    # Initialize boolean array
    is_prime = [True] * (limit + 1)
    is_prime[0] = is_prime[1] = False

    # Sieve algorithm
    for i in range(2, int(math.sqrt(limit)) + 1):
        if is_prime[i]:
            for j in range(i * i, limit + 1, i):
                is_prime[j] = False

    # Collect primes
    primes = []
    for i in range(2, limit + 1):
        if is_prime[i]:
            primes.append(i)

    return primes


def fibonacci_iterative(n):
    """Calculate nth Fibonacci number iteratively"""
    if n <= 1:
        return n

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b

    return b


def matrix_multiplication(size):
    """Multiply two square matrices of given size"""
    # Create matrices with simple values
    matrix_a = [[i + j for j in range(size)] for i in range(size)]
    matrix_b = [[i * j + 1 for j in range(size)] for i in range(size)]

    # Matrix multiplication
    result = [[0 for _ in range(size)] for _ in range(size)]

    for i in range(size):
        for j in range(size):
            for k in range(size):
                result[i][j] += matrix_a[i][k] * matrix_b[k][j]

    return result


def run_benchmarks():
    """Run all benchmarks and measure execution time"""
    print("Python Performance Benchmark")
    print("=" * 40)

    # Benchmark 1: Prime Sieve
    print("1. Prime Sieve (up to 100,000)")
    start_time = time.time()
    primes = sieve_of_eratosthenes(100000)
    end_time = time.time()
    print(f"   Found {len(primes)} primes in {end_time - start_time:.4f} seconds")

    # Benchmark 2: Fibonacci
    print("2. Fibonacci (40th number)")
    start_time = time.time()
    fib_result = fibonacci_iterative(40)
    end_time = time.time()
    print(f"   Result: {fib_result} in {end_time - start_time:.4f} seconds")

    # Benchmark 3: Matrix Multiplication
    print("3. Matrix Multiplication (200x200)")
    start_time = time.time()
    matrix_result = matrix_multiplication(200)
    end_time = time.time()
    print(f"   Completed in {end_time - start_time:.4f} seconds")

    # Overall timing
    total_start = time.time()

    # Run all tests together for total time
    sieve_of_eratosthenes(100000)
    fibonacci_iterative(40)
    matrix_multiplication(200)

    total_end = time.time()
    print(f"\nTotal execution time: {total_end - total_start:.4f} seconds")


if __name__ == "__main__":
    run_benchmarks()
