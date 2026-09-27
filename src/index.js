function sleep(interval) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
}

export default sleep;