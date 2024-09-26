import PropTypes from 'prop-types'
import "bootstrap-icons/font/bootstrap-icons.css";

// please refer to boostrap icon documentation, not all social media icons are available
const iconClassList = ['github', 'linkedin', 'youtube', 'facebook', 'instagram', 'twitter', 'wechat', ]
const iconColors = {github: '', linkedin: '#0a66c2', youtube: 'red', 
    facebook: '#3b5998', instagram: '#c13584', twitter: '#1da1f2', wechat: '#7bb32e', }

// use to generate the links and logos for the social media
const SocialMediaSection = ({socialMedias}) => {
    const socialMediaList = Object.keys(socialMedias);
    if (socialMediaList.length === 0){
        return (<></>);
    }
    const socialMediaAnchors = socialMediaList.map((item, index)=>{

        // simple check to see if link string contains http
        let link = socialMedias[item];
        if(link.length === 0){
            return (<div key={index + 'none'}></div>);
        }
        let hasHttp = link.indexOf('https://')===0 ? true : (link.indexOf('http://')===0 ? true : false);
        link = hasHttp ? link : 'https://'+link;
        
        console.log(iconColors[item]);
        return (<a className='social-media-links' href={link} key={`${index}-${socialMedias[item]}`} target='_blank' rel="noreferrer">
            {iconClassList.includes(item) ? <i className={`bi bi-${item}`} style={{color: iconColors[item]}}></i> : {item}}
        </a>);
    });
    return(<div className='social-media-container'>
        {socialMediaAnchors}
    </div>); 
}

// use to generate a single person contact information card
const ContactCard = ({person, className}) => {

    return (<div className={`contact-card ${className}`}>
        <img className='profile-picture' src={person.profilePic} alt={`${person.name}'s avatar`} />
        <div className='profile-info'>
            <div className='person-name'>{person.name}</div>
            <div className='person-email'><i className="bi bi-envelope-fill mail-icon"></i> <a href={`mailto:${person.email}`}>{person.email}</a> </div>
            {Object.keys(person).includes('socialMedias') && <SocialMediaSection socialMedias={person.socialMedias}/>}
        </div>
    </div>);
}

ContactCard.propTypes={
    person: PropTypes.object,
};


export default ContactCard;
