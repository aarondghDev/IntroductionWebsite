import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate
    return (
        <div>
            <h1>Profile page</h1>
            <h2>Social media:</h2>
            <div class="Links badge-base LI-profile-badge" data-locale="es_ES" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="aaron-garcia-hernandez-44586b301" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://es.linkedin.com/in/aaron-garcia-hernandez-44586b301?trk=profile-badge">Aaron Garcia Hernandez</a></div>
        </div>
    );
}

export default ProfilePage;
