import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './service.css'
import { Link } from 'react-router-dom';
// import Link from '@mui/material';

export default function Services() {
    return (
        <div className='serv'>
             <div style={{justifyContent:"center" , display:"flex" , paddingTop:"2.5%" , fontFamily:"sans-serif" , fontSize:"190%"}}>
                <p>Discover all the Domain you want to work with the Artist using VShare!!</p>
             </div>
            <div className='card1'>
                <div className="Arts" style={{marginRight:"20px"}}>
                   <Card sx={{ maxWidth: 345 , maxHeight:1000}}><Link to="/arts"  style={{textDecoration:'none'}}> 
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/art1.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Arts
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Sharing artwork is a wonderful way to showcase your creative talent, connect with others, and gain valuable feedback and recognition. Whether you're a painter, illustrator, photographer, or any other type of artist, here are some tips on how to effectively share your artwork..!
                                </Typography>
                            </CardContent>
                        </CardActionArea></Link>
                    </Card>
                </div>
                <div className="Saloon" style={{marginRight:"20px"}}>
                   <Link to ="/Program"  style={{textDecoration:'none'}}> <Card sx={{ maxWidth: 345 ,maxHeight:1000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/program1.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Programming
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Choose a programming project that interests all participants and aligns with their skill levels. It could be a web application, a mobile app, a game, or any other software project. Ensure it's challenging enough to keep everyone engaged but not too complex to discourage participation.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card></Link>
                </div>
                <div className="plumbing" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 , maxHeight:1000}}><Link to="/Music"  style={{textDecoration:'none'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/music.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Music
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Let's get together for some laid-back jam sessions where we can experiment with our instruments and explore different sounds. It's the perfect opportunity to bounce ideas off each other and see what clicks.: If you enjoy writing lyrics or composing melodies, I'd love to join forces with you to create original songs.
                                </Typography>
                            </CardContent>
                        </CardActionArea></Link>
                    </Card>
                </div>
                </div>
                <div className='card2'>
                <div className="mech" style={{marginRight:"20px" , paddingBottom:"40px"}}>
                   <Link to="/Video"  style={{textDecoration:'none'}}> <Card sx={{ maxWidth: 345 , maxHeight:1000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/ve.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Video Editing
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Whether you're a seasoned editor or just starting, being a part of our team means constant growth. We'll organize workshops, webinars, and share resources to keep refining our craft together.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card></Link>
                </div>
                <div className="nurse" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 , maxHeight:1000 }}><Link to="/Hackathon"  style={{textDecoration:'none'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/hack1.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hackathon
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                    Identifying patients’ care requirements, focus on their needs and act on them
                                    Nurturing a compassionate environment by providing psychological support
                                    Resolving or reporting on patients’ needs or problems
                                </Typography>
                            </CardContent>
                        </CardActionArea></Link>
                    </Card>
                </div>
                <div className="ac" style={{marginRight:"20px"}}>
                   <Link to="/Short" style={{textDecoration:'none'}}> <Card sx={{ maxWidth: 345 ,maxHeight:1000 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/sf.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Short Film
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                He also carries out general repairs and maintenance of machinery and equipment by diagnosing and troubleshooting special service problems following all building codes, blueprints, instructions, and manuals.

{/* The air conditioning technician’ role also involves estimating material and labor cost and determining plan and requirements for installing, fabricating, and start-up; testing, and servicing HVAC equipment. */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card></Link>
                </div>
 
                </div>
        </div>
    );
}