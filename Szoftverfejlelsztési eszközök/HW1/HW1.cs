using System;

class Fibonacci
{
    static void Main()
    {
        int n = 10;
        int first = 0, second = 1, next;

        Console.WriteLine("First 10 Fibonacci numbers:");

        Console.Write(first + " " + second + " ");

        for (int i = 3; i <= n; i++)
        {
            next = first + second;
            Console.Write(next + " ");
            first = second;
            second = next;
        }
        Console.WriteLine();
    }
}