function sieveOfEratosthenes(limit: number): number[] {
    if (limit < 2) return [];
    
    // Initialize boolean array
    const isPrime: boolean[] = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    // Sieve algorithm
    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // Collect primes
    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

function fibonacciIterative(n: number): number {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

function matrixMultiplication(size: number): number[][] {
    // Create matrices with simple values
    const matrixA: number[][] = [];
    const matrixB: number[][] = [];
    
    for (let i = 0; i < size; i++) {
        matrixA[i] = [];
        matrixB[i] = [];
        for (let j = 0; j < size; j++) {
            matrixA[i][j] = i + j;
            matrixB[i][j] = i * j + 1;
        }
    }
    
    // Matrix multiplication
    const result: number[][] = [];
    for (let i = 0; i < size; i++) {
        result[i] = new Array(size).fill(0);
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    
    return result;
}

function runBenchmarks(): void {
    console.log("TypeScript Performance Benchmark");
    console.log("========================================");
    
    // Benchmark 1: Prime Sieve
    console.log("1. Prime Sieve (up to 100,000)");
    let startTime = performance.now();
    const primes = sieveOfEratosthenes(100000);
    let endTime = performance.now();
    console.log(`   Found ${primes.length} primes in ${((endTime - startTime) / 1000).toFixed(4)} seconds`);
    
    // Benchmark 2: Fibonacci
    console.log("2. Fibonacci (40th number)");
    startTime = performance.now();
    const fibResult = fibonacciIterative(40);
    endTime = performance.now();
    console.log(`   Result: ${fibResult} in ${((endTime - startTime) / 1000).toFixed(4)} seconds`);
    
    // Benchmark 3: Matrix Multiplication
    console.log("3. Matrix Multiplication (200x200)");
    startTime = performance.now();
    const matrixResult = matrixMultiplication(200);
    endTime = performance.now();
    console.log(`   Completed in ${((endTime - startTime) / 1000).toFixed(4)} seconds`);
    
    // Overall timing
    const totalStart = performance.now();
    
    // Run all tests together for total time
    sieveOfEratosthenes(100000);
    fibonacciIterative(40);
    matrixMultiplication(200);
    
    const totalEnd = performance.now();
    console.log(`\nTotal execution time: ${((totalEnd - totalStart) / 1000).toFixed(4)} seconds`);
}

// For Node.js environments, check if performance is available
if (typeof performance === 'undefined') {
    // Fallback to Date.now() for environments without performance API
    const origConsoleLog = console.log;
    console.log = (...args) => {
        origConsoleLog("Note: Using Date.now() instead of performance.now() for timing");
        console.log = origConsoleLog;
        origConsoleLog(...args);
    };
    
    // Simple polyfill
    const performancePolyfill = {
        now: () => Date.now()
    };
    (globalThis as any).performance = performancePolyfill;
}

// Run the benchmarks
runBenchmarks();