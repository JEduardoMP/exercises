function christmasTree(height) {
    console.log(" ".repeat(height - 1) + "*");

    for (let i = 1; i <= height; i++) {
        console.log(" ".repeat(height - i) + "0".repeat(2 * i - 1));
    }
}
christmasTree(10);
