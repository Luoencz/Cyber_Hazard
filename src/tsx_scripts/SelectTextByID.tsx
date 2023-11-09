function selectText(containerId) {
    if (window.getSelection) {
            var range = document.createRange();
            range.selectNodeContents(document.getElementById(containerId));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
    }
}

export default selectText