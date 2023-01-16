document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#github-form')
    submitBtn.addEventListener('submit', (event) => {
        event.preventDefault()
        userSearch(event.target.search.value)
        submitBtn.reset();
        
    })
})

function userSearch(userName) {
    console.log(userName)
}