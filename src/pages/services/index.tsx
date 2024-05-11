import React from "react";
import data from './data.json'
import { useLocation } from "react-router-dom";
import styles from './media/scss/definition.module.scss'
import { Divider, List, ListItem, Paper, Typography } from "@mui/material";
import colors from '../../media/scss/_colors.module.scss';
import { Sheet } from "@mui/joy";

interface ServiceData {
	[key: string]: {
	  title: string;
	  definition: string;
	  howWorks: string;
	  advantages: string[];
	  result: string;
	};
  }
  

export const Service: React.FC = () => {
	const location = useLocation();
	const serviceName: string | null = new URLSearchParams(location.search).get('service');

	const serviceData = data as ServiceData

	return (
			serviceName === null ?
			<section>Error 404</section>
			:
			<section className={styles.serviceDefinitionPage}>
				<Typography variant="h4" mb={1} color={colors.colorGrey} sx={{
					textAlign: 'center',
					marginBottom: '30px'
				}}>{serviceData[serviceName].title}</Typography>
				<Paper sx={{
					boxSizing: 'border-box',
					paddingInline: '10px',
					marginInline: '10px',
					marginBottom: '30px',
					backgroundColor: colors.color2Half
				}}>
					<Typography variant="h4" mb={1} color={colors.colorGrey} sx={{
						textAlign: 'center',
						paddingTop: '25px'
					}}>Что такое?
					</Typography>
				<Divider sx={{
					marginBlock: "25px"
				}}/>
                <Typography className={styles.definition} sx={{
					paddingBottom: '25px'
				}}>
					{serviceData[serviceName].definition}
				</Typography>
				</Paper>
				<Paper sx={{
					boxSizing: 'border-box',
					paddingInline: '10px',
					marginInline: '10px',
					marginBottom: '30px',
					backgroundColor: colors.color2Half
				}}>
				<Typography variant="h4" mb={1} color={colors.colorGrey} sx={{
					textAlign: 'center',
					paddingTop: '25px'
				}}>Как работает?
				</Typography>
				<Divider sx={{
					marginBlock: "25px"
				}}/>
				<Typography className={styles.howWorks} sx={{
					paddingBottom: '25px'
				}}>
					{serviceData[serviceName].howWorks}
				</Typography>
				</Paper>
				<Paper sx={{
					boxSizing: 'border-box',
					paddingInline: '10px',
					marginInline: '10px',
					marginBottom: '30px',
					backgroundColor: colors.color2Half
				}}>
				<Typography variant="h4" mb={1} color={colors.colorGrey} sx={{
					textAlign: 'center',
					paddingTop: '25px'
				}}>Плюсы лечения
				</Typography>
				<Divider sx={{
					marginBlock: "25px"
				}}/>
				<List className={styles.advantages}>
					{serviceData[serviceName].advantages.map((advantage) => {
						return (
						<ListItem>
							<Typography className={styles.advantage}>{'-'}{advantage}</Typography>
						</ListItem>
						)
					})}
					</List>
				</Paper>
				<Paper sx={{
					boxSizing: 'border-box',
					paddingInline: '10px',
					marginInline: '10px',
					marginBottom: '30px',
					backgroundColor: colors.color2Half
				}}>
				<Typography variant="h4" mb={1} color={colors.colorGrey} sx={{
					textAlign: 'center',
					paddingTop: '25px'
				}}>Итог
				</Typography>
				<Divider sx={{
					marginBlock: "25px"
				}}/>
				<Typography className={styles.result} sx={{
					paddingBottom: "25px"
				}}>
					{serviceData[serviceName].result}
				</Typography>
				</Paper>
			</section>
	)
}