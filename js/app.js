(async () => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
})();
