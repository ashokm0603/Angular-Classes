class Demo {
    private int a = 10;

    public int getA() {
        return a;
    }
}

class Test {
    public static void main(String[] args) {
        System.out.println(new Demo().a);
    }
}