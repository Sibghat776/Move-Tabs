var btn1 = document.querySelector(".surah1")
var btn2 = document.querySelector(".surah2")
var btn3 = document.querySelector(".surah3")
var btn4 = document.querySelector(".surah4")
var img = document.querySelector("#img")
var tarjuma = document.querySelector(".tarjuma")
btn1.addEventListener("click", () => {
    console.log(img)
    img.src = "./Images/Surah 1.jpeg"
    tarjuma.innerHTML = ``
    tarjuma.innerHTML = `<p><strong>Translation:</strong>
                    <br>
                    <br>
                    Say, "O disbelievers,<br>
                    I do not worship what you worship. <br>
                    Nor do you worship what I worship. <br>
                    Nor will I ever worship what you worship. <br>
                    Nor will you ever worship what I worship. <br>
                    For you is your religion, and for me is my religion."
                    <br>
                    <br>
                    <br>
                    <br>
                    <strong>Description:</strong>
                    <br>
                    <br>
                    This Surah is a declaration of the
                    pure monotheistic faith in Islam, rejecting all forms of polytheism and disbelief. It emphasizes
                    that a Muslim’s worship is solely for Allah, without compromise, and sets a clear boundary between
                    the truth of Islam and other beliefs.
                </p>`
    btn1.classList.add("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
})
btn2.addEventListener("click", () => {
    console.log(img)
    img.src = "./Images/Surah 2.jpeg"
    tarjuma.innerHTML = ``
    tarjuma.innerHTML = `<p><strong>Translation:</strong>
                    <br>
                    <br>
                    Say, "He is Allah, [who is] One.<br>
                    Allah, the Eternal Refuge.<br>
                    He neither begets nor is born,<br>
                    Nor is there to Him any equivalent."<br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <strong>Description:</strong>
                    <br>
                    <br>
                    Known as the "Chapter of Purity," Surah Al-Ikhlas beautifully summarizes the essence of Allah’s oneness. It asserts that Allah is unique, self-sufficient, and incomparable, negating any human-like attributes or familial relationships. Reciting this Surah is equivalent to reciting one-third of the Quran in terms of reward and significance.</p>`
    btn1.classList.remove("active")
    btn2.classList.add("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
})
btn3.addEventListener("click", () => {
    console.log(img)
    img.src = "./Images/Surah 3.jpg"
    tarjuma.innerHTML = ``
    tarjuma.innerHTML = `<p><strong>Translation:</strong>
                    <br>
                    <br>
                   Say, "I seek refuge in the Lord of daybreak <br>
From the evil of that which He created, <br>
And from the evil of darkness when it settles, <br>
And from the evil of those who blow on knots, <br>
And from the evil of an envier when he envies." <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <strong>Description:</strong>
                    <br>
                    <br>
                    This Surah is a powerful prayer seeking Allah’s protection from all forms of evil—whether from His creations, the darkness of the night, magic, or envy. It highlights the importance of relying on Allah for safety and serves as a shield against both physical and spiritual harm.</p>`
    btn1.classList.remove("active")
    btn2.classList.remove("active")
    btn4.classList.remove("active")
    btn3.classList.add("active")
})
btn4.addEventListener("click", () => {
    console.log(img)
    img.src = "./Images/Surah 4.jpeg"
    tarjuma.innerHTML = ``
    tarjuma.innerHTML = `<p><strong>Translation:</strong>
                    <br>
                    <br>
                   Say, "I seek refuge in the Lord of mankind, <br>
The Sovereign of mankind, <br>
The God of mankind, <br>
From the evil of the retreating whisperer - <br>
Who whispers [evil] into the breasts of mankind - <br>
From among jinn and mankind." <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <strong>Description:</strong>
                    <br>
                    <br>
                    Surah An-Nas teaches believers to seek refuge in Allah from the subtle and persistent whispers of Satan and evil influences, whether they come from humans or jinn. It reminds us of Allah’s ultimate authority and power over all forms of harm.</p>`
    btn1.classList.remove("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.add("active")
})