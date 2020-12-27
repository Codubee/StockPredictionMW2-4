const { expect } = require('chai');
let chai = require('chai')
let chaiHttp = require('chai-http')
let app =  require('../index')
chai.should();
chai.use(chaiHttp);

describe('Tests enpoint at index.js',()=>{
    it('/ should return hello world',(done)=>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            res.text.should.be.eql('Hello world')
            done();
        })
    })

    it('/quote should return stock quote',(done)=>{
        chai.request(app)
        .get('/quote?company=AAPL')
        .end((err,res)=>{
            expect(res).to.have.status(200);
            done();
        })
    })
})
