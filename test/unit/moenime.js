/* eslint-disable no-undef */
const expect = require('chai').expect
const Browser = require('../../services/Browser')

describe('moenime', function () {
    describe('anime list', function() {
        it('should return an array of anime list with title and link', async function () {
            this.timeout(60000)
            await Browser.init()
            const Moenime = new(require('../../services/Moenime'))(Browser)
            const list = await Moenime.animeList()

            expect(list).to.be.an('array')
            expect(list).to.not.be.empty
            list.forEach(anime => {
                expect(anime).to.be.an('object')
                expect(anime).to.has.property('link')
                expect(anime).to.has.property('title')
            })
        })
    })

    describe('episodes', function () {
        it('should return an object which has array of episodes with quality, host, and link', async function () {
            this.timeout(60000)
            await Browser.init()
            const Moenime = new(require('../../services/Moenime'))(Browser)
            const episodes = await Moenime.episodes('%2Fabsolute-duo-sub-indo%2F')

            expect(episodes).to.be.an('object')
            expect(episodes).to.not.be.empty
            for (let episode in episodes) {
                if (episodes.hasOwnProperty(episode)) {
                    expect(episodes[episode]).to.be.an('array')
                    expect(episodes[episode]).to.have.lengthOf(18)
                    episodes[episode].forEach(file => {
                        expect(file).to.has.property('quality')
                        expect(file).to.has.property('host')
                        expect(file).to.has.property('link')
                    })
                }
            }
        })
    })

    describe('new releases', function () {
        it('should return an array of anime list with episode, title, and link', async function () {
            this.timeout(60000)
            await Browser.init()
            const Moenime = new(require('../../services/Moenime'))(Browser)
            const list = await Moenime.newReleases()

            expect(list).to.be.an('array')
            expect(list).to.have.lengthOf(12)
            list.forEach(anime => {
                expect(anime).to.be.an('object')
                expect(anime).to.has.property('episode')
                expect(anime).to.has.property('title')
                expect(anime).to.has.property('link')
            })
        })
    })
})