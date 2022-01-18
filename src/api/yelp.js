import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    header:{
        Authorization:'Bearer _p6n8Kvb3gx4YTd6JDKl6zZucm5A6wVSGQJJFo5G2mZUaduvVYh1WKFUrKrYCnLn0PDs7cem2GrxirrKpD5x0rrpNyYA1Zl10rowS-pTe4uPJKFkZ6WFxPJxlMTlYXYx'
    }
})

