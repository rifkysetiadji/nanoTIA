import React, { Component } from 'react'
import './style.css'
import {Card,Row,Col} from 'reactstrap'
import Navbar from '../../component/navbar/navbar'
import Interweave,{ Markup } from 'interweave';
import {useParams,withRouter} from 'react-router-dom'
import {getDetailArticle} from '../../redux/actions/artikel'
import {connect} from 'react-redux'
import Loading from '../../component/loading/loader'
import { Helmet } from "react-helmet";
class detail extends Component {
    componentDidMount(){
        this.props.getDetailArticle(this.props.match.params.slug)
    }
    render() {
        
        const {loading,articles}=this.props.articles
        return (
            <div style={{backgroundColor:'whitesmoke',minHeight:760}}>
                <Navbar/>
                <br/><br/>
                <div className='wrapped-artikel' >
                {loading||articles.length==0?<Loading/>:
                    <Card className='card-artikel'>
                        <Helmet>
                        <title>{articles[0].seo.title}</title>
                        <meta name="keywords" content="HTML,CSS,JavaScript" />
                        <meta
                            name="description"
                            content={articles[0].seo.description}
                        />
                        </Helmet>
                    <br/><br/>
                        <div className='header-artikel'>
                            <p style={{color:'#bf0016'}}>{articles[0].categories[0].name}</p>
                            <h1>{articles[0].title}</h1>
                            <Row>
                                <Col xs={1} style={{textAlign:'right',padding:0}}>
                                    <img src={articles[0].author.avatar_url} style={{borderRadius:'50%',width:30}}/>
                                </Col>
                                <Col xs={7} >
                                    <p style={{fontSize:12,color:'#bf0016'}}>{articles[0].author.display_name}<br/><span style={{fontSize:11,color:'grey'}}>1 hari lalu</span></p>
                                </Col>
                            </Row>
                        </div>
                        <div className='banner'>
                            <img src={articles[0].featured_image.source} style={{width:'100%'}}/>
                        </div>
                        <br/><br/>
                        <div className='content-artikel'>
                        <Interweave content={articles[0].content} /> 
                        </div>
                    </Card>
                }
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
    getDetailArticle
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(detail))