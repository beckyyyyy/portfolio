const detail = document.querySelectorAll(".main__detail")
const moreBtn = document.querySelectorAll(".more-btn")
const closeBtn = document.querySelectorAll(".close-btn")

const displayDetail = (btn) => {
  const collectionId = Number(btn) - 1
  detail[collectionId].classList.add("show")
}

const closeDetail = (btn) => {
  const collectionId = Number(btn) - 1
  detail[collectionId].classList.remove("show")
}

moreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayDetail?.(btn.dataset.id)
  })
})

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeDetail?.(btn.dataset.id)
  })
})
