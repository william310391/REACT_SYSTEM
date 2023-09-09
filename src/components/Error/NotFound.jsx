function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="card-header">Aviso</div>
          <div className="card-body">
            <h5 className="card-title">Error 404</h5>
            <p className="card-text">
              La ruta solicitada no existe o esta inaccesible
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
