# ReactJS_Custome_Hook
- When re render component custom hook will re run again. 
  + State in custom hook will be kept.
  + If state in custom hook change the component will be re rendered
  + useEffect will be run call back:
     - once time if []
     - all time if no []
     - just dependence change if [dep]