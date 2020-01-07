/* eslint-disable no-undef */
const expect = require('chai').expect
const Browser = require('../../services/Browser')

describe('oploverz', function () {
    describe('anime list', function () {
        it('should return an array of anime list which has title, link, raw link, and is batch', async function () {
            this.timeout(60000)
            await Browser.init()
            const Oploverz = require('../../services/Oploverz')
            const list = await Oploverz.animeList()

            expect(list).to.be.an('array')
            expect(list).to.not.be.empty
            list.forEach(item => {
                expect(item).to.be.an('object')
                expect(item).to.has.property('title')
                expect(item).to.has.property('link')
                expect(item).to.has.property('raw_link')
            })
        })
    })

    describe('episodes', function () {
        it('should return an array of episodes which has episode, link, and raw link', async function () {
            this.timeout(60000)
            await Browser.init()
            const Oploverz = require('../../services/Oploverz')
            const episodes = await Oploverz.episodes('%2Fanime%2Fgegege-no-kitarou-2018%2F')

            expect(episodes).to.be.an('array')
            episodes.forEach(item => {
                expect(item).to.be.an('object')
                expect(item).to.has.property('episode')
                expect(item).to.has.property('link')
                expect(item).to.has.property('raw_link')
            })
        })
    })

    describe('links', function () {
        it('should return an array of download links which has quality, host, and link', async function () {
            this.timeout(60000)
            await Browser.init()
            const Oploverz = require('../../services/Oploverz')
            const links = await Oploverz.links('%2Fgegege-no-kitarou-episode-87%2F')

            expect(links).to.be.an('array')
            links.forEach(item => {
                expect(item).to.be.an('object')
                expect(item).to.has.property('quality')
                expect(item).to.has.property('host')
                expect(item).to.has.property('link')
            })
        })
    })

    describe('new releases', function () {
        it('should return an array of episodes which has episode, title, and link', async function () {
            this.timeout(60000)
            await Browser.init()
            const Oploverz = require('../../services/Oploverz')
            const list = await Oploverz.newReleases()

            expect(list).to.be.an('array')
            list.forEach(item => {
                expect(item).to.be.an('object')
                expect(item).to.has.property('episode')
                expect(item).to.has.property('title')
                expect(item).to.has.property('link')
                expect(item).to.has.property('raw_link')
            })
        })
    })


    describe('shortlink', function () {
        it('should return an object which has a string url property', async function () {
            this.timeout(60000)
            await Browser.init()
            const Oploverz = require('../../services/Oploverz')
            const data = await Oploverz.hexa('https%3A%2F%2Fkontenajaib.xyz%2F%3Fid%3DemFXMEdBNC9HbDBMUTh0SFdiRHVQaFEyRWhKS3YzVEJSRHlrRVlEbExLZUNlSEdZaENXTW5mWllrNTliSXYrMXQ2NnhXOEZUL1BkSkpvbXAyRHg2ZE9ycVdZTlU3ejc1TUV5RXFWNkhxc3ZQQnVicW9jdTBtYk5SSjMxb2JLOTEwOFVGK1hSTks3N0txTkxOZHdsWUF4enVwVEtkQ0htUFA1LzJhNmZ1bkdkQ3RJNS9mNHhJOFlMMUdLWEtOQnlwSzE0QlVpODkvZ3RBYmZIQVpMbnVBK3IwOG5xRWFnU1FDOFBQRG55dkhKZmtWQldmM2Jtb1lvRCtmRHhMdXdNVE9DUDNzUjlWeUwrTm1FSEVPb1cvTTV3cFk0NTlCbms3NnVFYkpqRmFnSHczNWxFNllDN2E5VHVLdDdjZTU3dU0%3D')
            
            expect(data).to.be.an('object')
            expect(data).to.has.property('url')
            expect(data.url).to.be.a('string')
            expect(data.url).to.equal('https://www110.zippyshare.com/v/7dqelZac/file.html')
        })

        it('should return an object which has a string url property', async function () {
            this.timeout(60000)
            await Browser.init()
            const Oploverz = require('../../services/Oploverz')
            const data = await Oploverz.hexa('https%3A%2F%2Fhexafile.net%2Fu3CSw')

            expect(data).to.be.an('object')
            expect(data).to.has.property('url')
            expect(data.url).to.be.a('string')
            expect(data.url).to.equal('https://www63.zippyshare.com/v/ACM44jzR/file.html')
        })
    })
})