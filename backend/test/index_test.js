const { expect } = require('chai');
let chai = require('chai')
let chaiHttp = require('chai-http')
let app =  require('../index')
chai.should();
chai.use(chaiHttp);

describe('Tests get enpoint at /',()=>{
    it('Should return hello world',(done)=>{
        chai.request(app)
            .get('/')
            .end((err,res)=>{
                res.text.should.be.eql('Hello world')
                done();
            })
    })

    it('Should send paramters to /checkNews',(done)=>{
        chai.request(app)
            .post('/checkNews')
            .send({news: ['test', 'other']})
            .end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            })
    })
})
