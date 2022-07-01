import {
  Register,
  Dashboard,
  LupaPin,
  HistorySurvey,
  FormSurvey,
  SurveyOnProgress,
  UmkmSmart,
  Error404,
  ProfileNasabah,
  RiwayatSurveyKompetensi,
  SurveyKompetensiOnProgress
} from 'container/pages';

const AppRoutes = [
  {
    id: 3,
    path: '/home',
    component: Dashboard,
    exact: true
  },
  {
    id: 4,
    path: '/forgot-pin',
    component: LupaPin,
    exact: true
  },
  {
    id: 5,
    path: '/history-survey',
    component: HistorySurvey,
    exact: true
  },
  {
    id: 2,
    path: '/register',
    component: Register,
    exact: true
  },
  {
    id: 7,
    path: '/form-survey',
    component: FormSurvey,
    exact: true
  },
  {
    id: 7,
    path: '/survey-onprogress',
    component: SurveyOnProgress,
    exact: true
  },
  {
    id: 8,
    path: '/umkm-smart',
    component: UmkmSmart,
    exact: true
  },
  {
    id: 9,
    path: '/error-404',
    component: Error404,
    exact: true
  },
  {
    id: 10,
    path: '/profile-nasabah',
    component: ProfileNasabah,
    exact: true
  },
  {
    id: 11,
    path: '/riwayat-survey-kompetensi',
    component: RiwayatSurveyKompetensi,
    exact: true
  },
  {
    id: 12,
    path: '/riwayat-survey-on-progress',
    component: SurveyKompetensiOnProgress,
    exact: true
  }
];
export default AppRoutes;
