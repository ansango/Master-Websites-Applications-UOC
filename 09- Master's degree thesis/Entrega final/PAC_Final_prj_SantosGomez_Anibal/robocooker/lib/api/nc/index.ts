const options = {
  onError(err: any, req: any, res: any) {
    res.statusCode =
      err.status && err.status >= 100 && err.status < 600 ? err.status : 500;
    res.json({ message: err.message });
  },
};

export { options };
