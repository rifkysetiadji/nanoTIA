import React, { Component } from 'react'
import './style.css'
import Navbar from '../../component/navbar/navbar'
import {Row,Col} from 'reactstrap'
import {connect} from 'react-redux'
import {getArticles} from '../../redux/actions/artikel'
import Loading from '../../component/loading/loader'
import { Markup } from 'interweave';
import BottomScrollListener from 'react-bottom-scroll-listener';
class homepage extends Component {
    componentDidMount(){
        this.props.getArticles()
    }
    state={
        page:1
    }
    onBottomScroll=()=>{
        const {page}=this.state
        this.props.getArticles(`?page=${page+1}&per_page=15`)
        this.setState({page:this.state.page+1})
    }
    render() {
        const {articles,articles_headline,loading}=this.props.articles
        return (
            <div style={{backgroundColor:'whitesmoke',minHeight:760}}>
                
                <Navbar/>
                <br/><br/><br/>
                <div className='container' >
                    <div className='headline'>
                    {articles_headline==null?<Loading/>:

                        <Row>
                            <Col md={6} >
                                <div className='card-headline'>
                                    <a href={articles_headline[0].slug}>
                                        <img src={articles_headline[0].featured_image.source} className='image-headline' />
                                        <div className='caption'>
                                            <p className='caption-text' style={{fontSize:20}}>
                                                <b>{articles_headline[0].title}</b>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <br/>
                                <div className='card-mini'>
                                    <a href={articles_headline[1].slug}>
                                    <Row>
                                        <Col md={4} >
                                            <img src={articles_headline[1].featured_image.attachment_meta.sizes.medium_large.url} style={{width:'100%',height:'auto'}}/>
                                        </Col>
                                        <Col md={8} style={{padding:'10px 0px'}}>
                                        <p  style={{fontSize:16,color:'black'}}>
                                                <b>{articles_headline[1].title}</b>
                                            </p>
                                        </Col>
                                    </Row>
                                    </a>
                                </div>
                                <br/><br/>
                                <div className='card-mini'>
                                <a href={articles_headline[2].slug}>
                                    <Row>
                                        <Col md={4} >
                                            <img src={articles_headline[2].featured_image.attachment_meta.sizes.medium_large.url} style={{width:'100%',height:'auto'}}/>
                                        </Col>
                                        <Col md={8} style={{padding:'10px 0px'}}>
                                        <p  style={{fontSize:16,color:'black'}}>
                                                <b>{articles_headline[2].title}</b>
                                            </p>
                                        </Col>
                                    </Row>
                                    </a>
                                </div>
                            </Col>
                            <Col md={6} >
                           
                                <div className='card-mini'>
                                <a href={articles_headline[3].slug}>
                                    <Row>
                                        <Col md={4} >
                                            <img src={articles_headline[3].featured_image.attachment_meta.sizes.medium_large.url} style={{width:'100%',height:'auto'}}/>
                                        </Col>
                                        <Col md={8} style={{padding:'10px 0px'}}>
                                        <p  style={{fontSize:16,color:'black'}}>
                                                <b>{articles_headline[3].title}</b>
                                            </p>
                                        </Col>
                                    </Row>
                                    </a>
                                </div>
                                <br/><br/>
                                <div className='card-mini'>
                                <a href={articles_headline[4].slug}>
                                    <Row>
                                        <Col md={4} >
                                            <img src={articles_headline[4].featured_image.attachment_meta.sizes.medium_large.url} style={{width:'100%',height:'auto'}}/>
                                        </Col>
                                        <Col md={8} style={{padding:'10px 0px'}}>
                                        <p  style={{fontSize:16,color:'black'}}>
                                                <b>{articles_headline[4].title}</b>
                                            </p>
                                        </Col>
                                    </Row>
                                    </a>
                                </div>
                                <br/><br/>
                                <div className='card-headline'>
                                    <a href={articles_headline[5].slug}>
                                        <img src={articles_headline[5].featured_image.source} className='image-headline' />
                                        <div className='caption'>
                                            <p className='caption-text' style={{fontSize:20}}>
                                                <b>{articles_headline[5].title}</b>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        }
                    </div>
                    <br/><br/>
                    <div className='body-news'>
                        {articles!==null&&articles.map((article,i)=>(
                            <Row key={i}>
                            <Col md={7} >
                                <p style={{color:'#bf0016'}}>{article.categories[0].name}</p>
                                <a href={article.slug}><p style={{fontSize:24,color:'black'}}><b>{article.title}</b></p></a>
                                <Markup content={article.excerpt}/>
                                <hr/>
                                <Row>
                                    <Col md={1}>
                                        <img src={article.author.avatar_url} style={{borderRadius:'50%',width:30}}/>
                                    </Col>
                                    <Col md={9}>
                                        <p style={{fontSize:12,color:'#bf0016'}}>{article.author.display_name}<br/><span style={{fontSize:11,color:'grey'}}>1 hari lalu</span></p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={5}>
                                <img src={article.featured_image.source} style={{width:'100%'}}/>
                            </Col>
                        </Row>
                        ))}
                        <BottomScrollListener onBottom={this.onBottomScroll} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        articles:state.articles
    }
}
const mapDispatchToProps={
    getArticles
}
export default connect(mapStateToProps,mapDispatchToProps)(homepage)