import { Box, Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import React from "react";
import styles from './media/scss/homepage.module.scss';
import colors from '../../media/scss/_colors.module.scss';
import neurocorrection_img from './media/part_1/neurocorrection.jpg';
import logopedia_img from './media/part_1/logopedia.jpg';
import logopedical_massage_img from './media/part_1/logopedical_massage.jpg';
import communication_groups_img from './media/part_1/communication_groups.jpg';
import aba_therapy_img from './media/part_1/aba_therapy.jpg';
import play_therapy_img from './media/part_1/play_therapy.webp';
import sensory_integration_img from './media/part_1/sensory_integration.jpg';
import { Link } from "react-router-dom";

export const Homepage: React.FC = () => {
    return (
        <section className={styles.homepage}>
            <Typography variant="h3" color={colors.colorGrey} sx={{
				'@media screen and (max-width: 1200px)': {
					textAlign: 'center'
				}
			}}>Наши направления</Typography>
            <Divider sx={{marginBlock: 3}} />
            <Box component="ul" sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2, flexWrap: 'wrap', p: 0, marginBlock: 4 }}>
                {[
                    { img: neurocorrection_img, title: 'Нейрокоррекция', link: 'neurocorrection' },
                    { img: logopedia_img, title: 'Логопедия', link: 'logopedia' },
                    { img: logopedical_massage_img, title: 'Логопедический массаж', link: 'logopedical-massage' },
                    { img: communication_groups_img, title: 'Коммуникативные группы', link: 'communication-groups' },
                    { img: aba_therapy_img, title: 'АВА-терапия', link: 'aba-therapy' },
                    { img: play_therapy_img, title: 'Игровая терапия', link: 'play-therapy' },
                    { img: sensory_integration_img, title: 'Сенсорная интеграция', link: 'sensory-integration' },
                ].map((item, index) => (
                    <Link to={`/definition?service=${item.link}`} key={index} className={styles.link}>
                        <Button sx={{
                            p: 0,
                            transition: 'transform .5s',
                            '@media screen and (min-width: 1200px)': {
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }
                        }}>
                            <Card className={styles.card} component="li" sx={{ 
                                width: 350, 
                                height: 400, 
                                backgroundColor: colors.color2Half, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                            }}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={item.img}
                                    alt={item.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography
                                        sx={{
                                            color: colors.colorGrey,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Button>
                    </Link>
                ))}
            </Box>
        </section>
    )
}
