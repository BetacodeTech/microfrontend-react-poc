# MICROFRONT END WITH REACT AND PURE HTML

### Install

```
npm install
```

### Run
```
npm start
```

Access http://localhost:9091

### Parent to Iframe communication
Send data to IFrame
```
const frame = $('#frame')[0];
const message = $('#message')[0].value;
const data = JSON.stringify({
    message,
    channel: "PARENT",
    date: Date.now(),
});
frame.contentWindow.postMessage(data, '*');
```

Capture message from parent window
```
window.addEventListener('message', function (e) {
    const data = JSON.parse(e.data);
    const date = new Date(data.date).toLocaleTimeString('en-US');
    const channel = data.channel;

    if (channel == "PARENT") {
        console.log(`Receive "${data.message}" at ${date}<br>`);
    }
});
```

### Iframe to Parent communication
Send data to parent
```
const date = Date.now();
const data = JSON.stringify({
    channel: 'IFRAME',
    message,
    date

});
window.parent.postMessage(data, '*');
```

Capture message from inframe on main window

```
window.addEventListener('message', function (e) {
    const data = JSON.parse(e.data);
    const date = new Date(data.date).toLocaleTimeString('en-US');
    const channel = data.channel;

    if(channel == "IFRAME"){
        alert(`Receive "${data.message}" at ${date}`);
    }
});
```

Live demo: https://drive.google.com/file/d/1NzRq6hU1T-01GN6dcrazLz59KU9FQCpe/view?usp=sharing
