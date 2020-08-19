function method(n) {
    let step = "", row = 2 * n - 1, col = n;

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (i <= n) {
                if (j <= i) {
                    step += "*"
                }
                else {
                    step += "-"
                }

            } else {
                if (j <= row - i + 1) {
                    step += "*"
                }
                else {
                    step += "-"
                }
            }

        }
        step += "\n";
    }

    console.log(step);
}

method(4)
