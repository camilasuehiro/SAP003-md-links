const mdLinks = require("../index.js");

const links = [
    {text: "learnyounode", href: "https://github.com/workshopper/learnyounode"},
    {text: "how-to-npm", href: "https://github.com/workshopper/how-to-npm"},
    {text: "promise-it-wont-hurt", href: "https://github.com/stevekane/promise-it-wont-hurt"}
]

describe("mdLinks", () => {
    it("is a function", () => {
        expect(typeof mdLinks).toBe("function");
    })
    it("Should return links", (done) => {
        mdLinks("./lib/__test__/test1.md").then(result => {
            expect(result).toEqual(links)
            done()
        })
    })
    it("Should return an error", (done) => {
        mdLinks("./lib/__test__/test.md").catch(result => {
            expect(result).toEqual("errooo Error: ENOENT: no such file or directory, open './lib/__test__/test.md'")
            done()
        })
    })
})