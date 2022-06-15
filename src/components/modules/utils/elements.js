function ModuleTitle(targetId,innerText) {
    $(`#${targetId}-header`).append(
        `<div `+
        `name="title"`+
        `class="module-title">`+
        `    <span>`+
        `${innerText}</span>`+
        `</div>`
    )
}

function ModuleSubtitle(targetId,innerText) {
    $(`#${targetId}-header`).append(
        `<div `+
        `name="title"`+
        `class="module-subtitle">`+
        `    <span>`+
        `${innerText}</span>`+
        `</div>`
    )
}