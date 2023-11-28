import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Divider, Chip, Avatar } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import BuildingIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import "./Reclamo.css"; // Asume que tienes un archivo de CSS con estilos personalizados

const Reclamo = ({ reclamo }) => {
    return (
        <div class="scroll-container">
            <div className="flex justify-center mt-20">
                <Card raised className="reclamo-card">
                    <CardContent>
                        <Typography variant="h4" color="primary" className="reclamo-title">
                            Reclamo #{reclamo.numero}
                        </Typography>

                        <div className="reclamo-section">
                            <PersonIcon color="secondary" />
                            <Typography variant="h6">Usuario</Typography>
                            <Typography variant="body1">{reclamo.usuario.nombre}</Typography>
                            <Typography variant="body2">{reclamo.usuario.documento}</Typography>
                        </div>
                        <Divider />

                        <div className="reclamo-section">
                            <BuildingIcon color="secondary" />
                            <Typography variant="h6">Edificio</Typography>
                            <Typography variant="body1">{reclamo.edificio.nombre}</Typography>
                            <Typography variant="body2">{reclamo.edificio.direccion}</Typography>
                        </div>
                        <Divider />

                        <div className="reclamo-section">
                            <Typography variant="h6">Descripción</Typography>
                            <Typography variant="body1">{reclamo.descripcion}</Typography>
                        </div>
                        <Divider />

                        <div className="reclamo-section">
                            <Chip label={reclamo.estado} color="primary" />
                        </div>
                        <Divider />

                        <div className="reclamo-comments">
                            <Typography variant="h6">Comentarios</Typography>
                            <List>
                                {reclamo.comentarios.map((comentario) => (
                                    <ListItem key={comentario.idcomentario} className="reclamo-comment">
                                        <Avatar>
                                            <CommentIcon />
                                        </Avatar>
                                        <div className="comment-content">
                                            <Typography variant="body1">{comentario.texto}</Typography>
                                            <Typography variant="body2">{comentario.fecha}</Typography>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Reclamo;
