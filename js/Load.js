document.addEventListener('DOMContentLoaded', function () {
    let activeCount = 0;

    const showsnubby = function () {
        activeCount += 1;
        document.body.classList.add('footer-link-hover');
    };

    const hidefatfuck = function () {
        activeCount = Math.max(0, activeCount - 1);
        if (activeCount === 0) {
            document.body.classList.remove('footer-link-hover');
        }
    };

    const gethref = function (node) {
        if (!node || node.nodeType !== 1) {
            return null;
        }
        return node.closest('a[href]');
    };

    document.addEventListener('mouseover', function (event) {
        const tolink = gethref(event.target);
        const getlink = gethref(event.relatedTarget);
        if (tolink && tolink !== getlink) {
            showsnubby();
        }
    });

    document.addEventListener('mouseout', function (event) {
        const getlink = gethref(event.target);
        const tolink = gethref(event.relatedTarget);
        if (getlink && getlink !== tolink) {
            hidefatfuck();
        }
    });

    document.addEventListener('focusin', function (event) {
        if (gethref(event.target)) {
            showsnubby();
        }
    });

    document.addEventListener('focusout', function (event) {
        if (gethref(event.target)) {
            hidefatfuck();
        }
    });
});
