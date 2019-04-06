</div>
      <Grid centered>
      <Grid.Row columns={this.state.moble ? 2 : 5}>
      {
        this.state.quad.map(v =>(
          <Grid.Column style={{marginBottom: "50px"}}>
        <div style={{marginBottom:"5px",width: "100", height: "50", borderRadius: "10px", overflow: "hidden" }} >
          <iframe 
          width="100%" 
          height="100%" 
          src={v.trailer} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          />
          </div>
          <Link user_id={this.state.id} id={v.id} to={`users/${this.state.id}/videos/${this.state.id}`}>
          <Header style={{marginTop:"3px"}}>{v.title}</Header>
          </Link>
        </Grid.Column>
         ))
        }
        </Grid.Row>
          </Grid>
      </div>
    )}