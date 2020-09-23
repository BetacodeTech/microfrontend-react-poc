$(() => {
    $("#button").click(() => {
        const frame = $('#frame')[0];
        const message = $('#message')[0].value;
        const data = JSON.stringify({
            message,
            channel: "PARENT",
            date: Date.now(),
        });
        frame.contentWindow.postMessage(data, '*');
    });

    window.addEventListener('message', function (e) {
        const data = JSON.parse(e.data);
        const date = new Date(data.date).toLocaleTimeString('en-US');
        const channel = data.channel;

        if(channel == "IFRAME"){
            alert(`Receive "${data.message}" at ${date}`);
        }
    });
});
