import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Artists from './components/Artists/Artists';
import History from './components/History/History';
import Culture from './components/Culture/Culture';
import Events from './components/Events/Events';
import Milestone from './components/Milestone/Milestone';
import Contact from './components/Contact/Contact';
import Agency from './components/Agency/Agency';
import News from './components/News/News';
import SelectedNews from './components/News/SelectedNews';
import Register from './components/Register/Register';
import Login from './components/LoginAdmin/Login';
import PanelAdmin from './components/PanelAdmin/PanelAdmin';
import EventsAdmin from './components/PanelAdmin/Options/Events/EventsAdmin';
import OurClub from './components/PanelAdmin/Options/OurClub/OurClub';
import Users from './components/PanelAdmin/Options/Users/Users';
import AddUsers from './components/PanelAdmin/Options/Users/AddUsers/AddUsers';
import DeleteUsers from './components/PanelAdmin/Options/Users/DeleteUsers/DeleteUsers';
import Residents from './components/PanelAdmin/Options/OurClub/Residents/Residents';
import AgencyAdmin from './components/PanelAdmin/Options/OurClub/Agency/AgencyAdmin';
import PodcastAdmin from './components/PanelAdmin/Options/OurClub/Podcast/PodcastAdmin';
import EpisodeAdmin from './components/PanelAdmin/Options/OurClub/Episodes/EpisodeAdmin';
import NewsAdmin from './components/PanelAdmin/Options/OurClub/News/NewsAdmin';
import AddResidents from './components/PanelAdmin/Options/OurClub/Residents/AddResidents/AddResidents';
import UpdateResidents from './components/PanelAdmin/Options/OurClub/Residents/UpdateResidents/UpdateResidents';
import EditViewResidents from './components/PanelAdmin/Options/OurClub/Residents/EditViewResidents/EditViewResidents';
import DeleteResidents from './components/PanelAdmin/Options/OurClub/Residents/DeleteResidents/DeleteResidents';
import AddEvents from './components/PanelAdmin/Options/Events/AddEvents/AddEvents';
import UpdateEvents from './components/PanelAdmin/Options/Events/UpdateEvents/UpdateEvents';
import EditEvents from './components/PanelAdmin/Options/Events/EditEvents/EditEvents';
import DeleteEvent from './components/PanelAdmin/Options/Events/DeleteEvent/DeleteEvent';
import AddPodcast from './components/PanelAdmin/Options/OurClub/Podcast/AddPodcast/AddPodcast';
import UpdatePodcast from './components/PanelAdmin/Options/OurClub/Podcast/UpdatePodcast/UpdatePodcast';
import EditViewPodcast from './components/PanelAdmin/Options/OurClub/Podcast/EditViewPodcast/EditViewPodcast';
import DeletePodcast from './components/PanelAdmin/Options/OurClub/Podcast/DeletePodcast/DeletePodcast';
import AddEpisode from './components/PanelAdmin/Options/OurClub/Episodes/AddEpisode/AddEpisode';
import UpdateEpisode from './components/PanelAdmin/Options/OurClub/Episodes/UpdateEpisode/UpdateEpisode';
import EditViewEpisode from './components/PanelAdmin/Options/OurClub/Episodes/EditViewEpisode/EditViewEpisode';
import DeleteEpisode from './components/PanelAdmin/Options/OurClub/Episodes/DeleteEpisode/DeleteEpisode';
import AddInternationalResidents from './components/PanelAdmin/Options/OurClub/Agency/AddInternationalResidents/AddInternationalResidents';
import UpdateInternationalResidents from './components/PanelAdmin/Options/OurClub/Agency/UpdateInternationalResidents/UpdateInternationalResidents';
import EditViewInternationalResidents from './components/PanelAdmin/Options/OurClub/Agency/EditViewInternationalResidents/EditViewInternationalResidents';
import DeleteInternationalResidents from './components/PanelAdmin/Options/OurClub/Agency/DeleteInternationalResidents/DeleteInternationalResidents';
import AddNews from './components/PanelAdmin/Options/OurClub/News/AddNews/AddNews';
import UpdateNews from './components/PanelAdmin/Options/OurClub/News/UpdateNews/UpdateNews';
import EditViewNews from './components/PanelAdmin/Options/OurClub/News/EditViewNews/EditViewNews';
import DeleteNews from './components/PanelAdmin/Options/OurClub/News/DeleteNews/DeleteNews';
import NotFound from './components/NotFound/NotFound';

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="App">
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        <BrowserRouter>
          <NavBar />
          <Routes
          //  location={location} key={location.pathname}
           >
            <Route path="/" element={<Home />} />
            {/* <Route path="/artists" element={<Artists />} /> */}
            <Route path="/history" element={<History />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/events" element={<Events />} />
            <Route path="/milestones" element={<Milestone />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/agency" element={<Agency />} /> */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<SelectedNews />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<PanelAdmin />} />

            <Route path="/admin/events" element={<EventsAdmin />} />
            <Route path="/admin/ourclub" element={<OurClub />} />

            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/users/addusers" element={<AddUsers />} />
            <Route path="/admin/users/deleteusers" element={<DeleteUsers />} />

            <Route path="/admin/ourclub/residents" element={<Residents />} />

            <Route path="/admin/ourclub/agency" element={<AgencyAdmin />} />
            <Route path="/admin/ourclub/podcast" element={<PodcastAdmin />} />
            <Route path="/admin/ourclub/episodes" element={<EpisodeAdmin />} />
            <Route path="/admin/ourclub/news" element={<NewsAdmin />} />

            <Route path="/admin/ourclub/residents/addresidents" element={<AddResidents />} />
            <Route path="/admin/ourclub/residents/updateresidents" element={<UpdateResidents />} />
            <Route
              path="/admin/ourclub/residents/updateresidents/:id"
              element={<EditViewResidents />}
            />
            <Route path="/admin/ourclub/residents/deleteresidents" element={<DeleteResidents />} />

            <Route path="/admin/events/addevents" element={<AddEvents />} />
            <Route path="/admin/events/updateevents" element={<UpdateEvents />} />
            <Route path="/admin/events/updateevents/:id" element={<EditEvents />} />
            <Route path="/admin/events/deleteevent" element={<DeleteEvent />} />

            <Route path="/admin/ourclub/podcast/addpodcast" element={<AddPodcast />} />
            <Route path="/admin/ourclub/podcast/updatepodcast" element={<UpdatePodcast />} />
            <Route path="/admin/ourclub/podcast/updatepodcast/:id" element={<EditViewPodcast />} />
            <Route path="/admin/ourclub/podcast/deletepodcast" element={<DeletePodcast />} />

            <Route path="/admin/ourclub/episode/addepisode" element={<AddEpisode />} />
            <Route path="/admin/ourclub/episode/updateepisode" element={<UpdateEpisode />} />
            <Route path="/admin/ourclub/episode/updateepisode/:id" element={<EditViewEpisode />} />
            <Route path="/admin/ourclub/episode/deleteepisode" element={<DeleteEpisode />} />

            <Route path="/admin/ourclub/agency/addagency" element={<AddInternationalResidents />} />
            <Route
              path="/admin/ourclub/agency/updateagency"
              element={<UpdateInternationalResidents />}
            />
            <Route
              path="/admin/ourclub/agency/updateagency/:id"
              element={<EditViewInternationalResidents />}
            />
            <Route
              path="/admin/ourclub/agency/deleteagency"
              element={<DeleteInternationalResidents />}
            />

            <Route path="/admin/ourclub/news/addnews" element={<AddNews />} />
            <Route path="/admin/ourclub/news/updatenews" element={<UpdateNews />} />
            <Route path="/admin/ourclub/news/updatenews/:id" element={<EditViewNews />} />
            <Route path="/admin/ourclub/news/deletenews" element={<DeleteNews />} />

            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="404" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
