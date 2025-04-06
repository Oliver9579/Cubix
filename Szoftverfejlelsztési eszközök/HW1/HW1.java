public class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        int first = 0, second = 1, next;

        System.out.println("First 10 Fibonacci numbers:");

        System.out.print(first + " " + second + " ");

        for (int i = 3; i <= n; i++) {
            next = first + second;
            System.out.print(next + " ");
            first = second;
            second = next;
        }

        System.out.println();
    }
}
