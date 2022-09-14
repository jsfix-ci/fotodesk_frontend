{
  /* <PrivateRoute exact path="/objava" component={Objava} />
export function PrivateRoute({component: Component, onlyAdmin = false, ...rest}) {
    // eslint-disable-next-line
    const isLoggedIn = !!useSelector((state) => state.auth.user.token);
    const isAdmin = useSelector((state) => state.auth.user.role === 'admin');
    const dispatch = useDispatch();
    const history = useHistory();
  
    return (
      <Route
        {...rest}
        render={(props) => {
          if (onlyAdmin && isLoggedIn && isAdmin) {
            return <Component {...props} />;
          } else if (onlyAdmin && !isAdmin) {
            return history.push('/');
          }
          if (isLoggedIn) {
            return <Component {...props} />;
          } else {
            setTimeout(() => {
              dispatch(
                commonSlice.actions.setNotification({
                  message: 'Niste prijavljeni, molimo da se prijavite',
                  type: 'error',
                })
              );
            }, 50);
            return history.push('/login');
          }
        }}
      ></Route>
    );
  }
  export function OnlyPublicRoute({component: Component, rest}) {
    // eslint-disable-next-line
    const isGuest = useSelector((state) => state.auth.user.token) == undefined;
    const history = useHistory();
    return (
      <Route
        {...rest}
        render={(props) => {
          if (isGuest) {
            return <Component {...props} />;
          } else {
            return history.push('/');
          }
        }}
      ></Route>
    );

  } */
}

{
  /* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/search" component={Pretraga} />
<PrivateRoute exact path="/objava" component={Objava} />
<PrivateRoute exact path="/objava-1" component={Objava1} />
<PrivateRoute exact path="/objava-2" component={Objava2} />
<PrivateRoute exact path="/objava-3" component={Objava3} />
<PrivateRoute exact path="/objava-4" component={Objava4} />
<Route
  exact
  path="/kategorija/:id/potkategorija/:subCategoryId"
  component={Potkategorija}
/>
<Route path="/kategorija/:id" component={Kategorija} />
<Route path="/kategorija" component={KategorijaSve} />
<Route path="/detail/:id/edit" component={EditArticle} />
<Route exact path="/detail" component={Detail} />
<Route path="/detail/:id" component={Detail} />
<Route exact path="/detaljne-informacije" component={DetailInfo} />
<Route
  exact
  path="/pitanja-odgovori/:id"
  component={DetailComments}
/>
<PrivateRoute exact path="/poruke" component={Poruke} />
<PrivateRoute exact path="/poruka/:id" component={Poruka} />
{/* <PrivateRoute exact path="/neprocitane" component={NeprocitanePoruke} /> */
}
/*
<PrivateRoute
  exact
  path="/neodgovorene"
  component={NeodgovorenePoruke}
/>
<PrivateRoute exact path="/notifikacije" component={Notifikacije} />
<PrivateRoute exact path="/moj-profil" component={MojProfil} />
<PrivateRoute exact path="/postavke" component={Postavke} />
<PrivateRoute exact path="/favoriti/:id" component={Favoriti} />
<PrivateRoute
  exact
  path="/promjena-sifre"
  component={ChangePassword}
/>
<Route exact path="/aktivne-objave/:id" component={AktivneObjave} />
<Route exact path="/zavrsene-objave/:id" component={AktivneObjave} />
<Route exact path="/dojmovi/:id" component={Dojmovi} />
<Route exact path="/dojmovi" component={Dojmovi} />
<Route exact path="/user/:id" component={User} />
<Route exact path="/prodavnica/:id" component={Prodavnica} />
<OnlyPublicRoute exact path="/login" component={Login} />
<OnlyPublicRoute
  exact
  path="/zaboravljena-sifra"
  component={ZaboravljenaSifra}
/>
<OnlyPublicRoute
  exact
  path="/ponistavanje-lozinke"
  component={ResetPassword}
/>
<Route exact path="/potvrda-email" component={VerifyEmail} />
<Route exact path="/potvrda-naloga" component={VerifyAccount} />
<OnlyPublicRoute
  exact
  path="/registracija"
  component={Registracija}
/>
<Route exact path="/uslovi-koristenja" component={UseOfTerms} />
<Route exact path="/zastita-privatnosti" component={PrivacyPolicy} />
<PrivateRoute
  exact
  path="/admin/subsubsub"
  component={Admin2}
  onlyAdmin={true}
/>
<PrivateRoute
  exact
  path="/admin/subsub"
  component={Admin1}
  onlyAdmin={true}
/>
<PrivateRoute
  exact
  path="/admin"
  component={Admin}
  onlyAdmin={true}
/>
<PrivateRoute
  exact
  path="/admin/korisnici"
  component={AdminKorisnici}
  onlyAdmin={true}
/>
<PrivateRoute
  exact
  path="/admin/korisnici/:id"
  component={AdminKorisnik}
  onlyAdmin={true}
/>
<Route path="/nagradna-igra" component={NagradnaIgra} />
<Route path="*" component={NotFound} />
</Switch> */

export default {};
