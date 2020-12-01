import {prepareToPlan, queryFromHost, prepareToManage} from "../services/method";

export default {
  namespace: 'planning',
  state: {
    // mission_a: [],
    // mission_b: [],
    todo_list: [],
    position: [],
    flight_info: [],
    mission_info: [],
    // mission: {},
    // algo: 1,
    // trans: "",
    // current_cost: [],
    // algo: {
    //   id: 1,
    // },
    // flight: {
    //   num: 0,
    //   //information: []
    // },
    // height: {
    //   h: 0,
    //   //information: []
    // },
    // point: {
    //   start: -1,
    //   pass: []
    // },
    // route: [],
  },
  effects:{
    *query_from_host({payload}, sagaEffects) {
      //console.log(payload)
      const { call, put } = sagaEffects;
      const response = yield call(queryFromHost,payload);
      console.log(response)
      yield put({ type: "Change", payload: response });
    },
    *pre_to_plan({payload}, sagaEffects) {
      //console.log("asdf")
      const { call, put } = sagaEffects;
      const response = yield call(prepareToPlan,payload);
      console.log(response)
      yield put({ type: "Change", payload: response });
    },
    *pre_to_manage({payload}, sagaEffects) {
      //console.log("asdf")
      const { call, put } = sagaEffects;
      const response = yield call(prepareToManage,payload);
      console.log(response)
      yield put({ type: "Change", payload: response });
    },
    // *pre_to_plan({payload}, sagaEffects){
    //   const { call, put } = sagaEffects;
    //   const response = yield call(prepareToPlan,payload);
    //   console.log(response)
    //   yield put({ type: "updateRoute", payload: response });
    // },
    // *get_the_route(_, sagaEffects){
    //   const { call, put } = sagaEffects;
    //   const datasets  = yield call(getTheRoute);
    //   console.log(datasets)
    //   yield put({ type: "updateRoute", payload: datasets });
    // }
  },
  reducers: {
    // set_algo(state, { payload: number }) {
    //   console.log("asdf")
    //   const nextAlgo = number;
    //   const nextFlight = state.flight;
    //   //const nextInformation = state.flight.information;
    //   const nextHeight = state.height;
    //   const nextPoint = state.point;
    //   const nextRoute = state.route;
    //   // const newCardWithId = { ...newCard, id: nextCounter };
    //   // const nextData = state.data.concat(newCardWithId);
    //   return {
    //     algo: {
    //       id: nextAlgo,
    //     },
    //     flight: nextFlight,
    //     height: nextHeight,
    //     point: nextPoint,
    //     route: nextRoute,
    //   };
    // },
    // set_flight_num(state, { payload: number }) {
    //   const nextAlgo = state.algo;
    //   const nextNumber = number;
    //   //const nextInformation = state.flight.information;
    //   const nextHeight = state.height;
    //   const nextPoint = state.point;
    //   const nextRoute = state.route;
    //   // const newCardWithId = { ...newCard, id: nextCounter };
    //   // const nextData = state.data.concat(newCardWithId);
    //   return {
    //     algo: nextAlgo,
    //     flight: {
    //       num: nextNumber,
    //       //information: nextInformation,
    //     },
    //     height: nextHeight,
    //     point: nextPoint,
    //     route: nextRoute,
    //   };
    // },
    // set_height(state, { payload: number }) {
    //   const nextAlgo = state.algo;
    //   const nextHeight = number;
    //   //const nextInformation = state.good.information;
    //   const nextFlight = state.flight;
    //   const nextPoint = state.point;
    //   const nextRoute = state.route;
    //   // const newCardWithId = { ...newCard, id: nextCounter };
    //   // const nextData = state.data.concat(newCardWithId);
    //   return {
    //     algo: nextAlgo,
    //     flight: nextFlight,
    //     height: {
    //       h: nextHeight,
    //       //information: nextInformation,
    //     },
    //     point: nextPoint,
    //     route: nextRoute,
    //   };
    // },
    // set_start_point(state, { payload: start_id }) {
    //   const nextAlgo = state.algo;
    //   const nextStart = start_id;
    //   const nextPass = state.point.pass;
    //   const nextFlight = state.flight;
    //   const nextHeight = state.height;
    //   const nextRoute = state.route;
    //   // const newCardWithId = { ...newCard, id: nextCounter };
    //   // const nextData = state.data.concat(newCardWithId);
    //   return {
    //     algo: nextAlgo,
    //     flight: nextFlight,
    //     height: nextHeight,
    //     point: {
    //       start: nextStart,
    //       pass: nextPass,
    //     },
    //     route: nextRoute,
    //   };
    // },
    // set_pass_point(state, { payload: pass_id }) {
    //   const nextAlgo = state.algo;
    //   const nextStart = state.point.start;
    //   const nextPass = state.point.pass.concat(pass_id);
    //   const nextFlight = state.flight;
    //   const nextHeight = state.height;
    //   const nextRoute = state.route;
    //   // const newCardWithId = { ...newCard, id: nextCounter };
    //   // const nextData = state.data.concat(newCardWithId);
    //   return {
    //     algo: nextAlgo,
    //     flight: nextFlight,
    //     height: nextHeight,
    //     point: {
    //       start: nextStart,
    //       pass: nextPass,
    //     },
    //     route: nextRoute,
    //   };
    // },
    // updateRoute(state, { payload: datasets }) {
    //   const nextAlgo = state.algo;
    //   const nextFlight = state.flight;
    //   const nextHeight = state.height;
    //   const nextPoint = state.point;
    //   const nextRoute = datasets;
    //   // const newCardWithId = { ...newCard, id: nextCounter };
    //   // const nextData = state.data.concat(newCardWithId);
    //   return {
    //     algo: nextAlgo,
    //     flight: nextFlight,
    //     height: nextHeight,
    //     point: nextPoint,
    //     route: nextRoute,
    //   };
    // },
    set_mission(state, { payload: datasets }) {
      const next_mission_a = state.mission_a;
      const next_mission_b = state.mission_b;
      const next_todo_list = state.todo_list;
      const next_position = state.position;
      const next_current_cost = state.current_cost;
      const next_mission = datasets;
      const next_algo = state.algo;
      const next_trans = state.trans;
      return {
        mission_a: next_mission_a,
        mission_b: next_mission_b,
        todo_list: next_todo_list,
        position: next_position,
        current_cost: next_current_cost,
        mission: next_mission,
        algo: next_algo,
        trans: next_trans,
      }
    },
    set_algo(state, { payload: datasets }) {
      const next_mission_a = state.mission_a;
      const next_mission_b = state.mission_b;
      const next_todo_list = state.todo_list;
      const next_position = state.position;
      const next_current_cost = state.current_cost;
      const next_mission = state.mission;
      const next_algo = datasets;
      const next_trans = state.trans;
      return {
        mission_a: next_mission_a,
        mission_b: next_mission_b,
        todo_list: next_todo_list,
        position: next_position,
        current_cost: next_current_cost,
        mission: next_mission,
        algo: next_algo,
        trans: next_trans,
      }
    },
    trans_mission(state, { payload: datasets }) {
      const next_mission_a = state.mission_a;
      const next_mission_b = state.mission_b;
      const next_todo_list = state.todo_list;
      const next_position = state.position;
      const next_current_cost = state.current_cost;
      const next_mission = state.mission;
      const next_algo = state.algo;
      const next_trans = datasets;
      return {
        mission_a: next_mission_a,
        mission_b: next_mission_b,
        todo_list: next_todo_list,
        position: next_position,
        current_cost: next_current_cost,
        mission: next_mission,
        algo: next_algo,
        trans: next_trans,
      }
    },
    Change(state, { payload: datasets }) {
      // const next_mission_a = datasets["mission_a"];
      // const next_mission_b = datasets["mission_b"];
      const next_todo_list = datasets["todo_list"];
      const next_position = datasets["position"];
      const next_flight_info = datasets["flight_info"];
      const next_mission_info = datasets["mission_info"];
      // const next_current_cost = datasets["current_cost"];
      // const next_mission = state.mission;
      // const next_algo = state.algo;
      // const next_trans = state.trans;
      return {
        // mission_a: next_mission_a,
        // mission_b: next_mission_b,
        todo_list: next_todo_list,
        position: next_position,
        flight_info: next_flight_info,
        mission_info: next_mission_info,
        // current_cost: next_current_cost,
        // mission: next_mission,
        // algo: next_algo,
        // trans: next_trans,
      }
    }
  },
};