# react-persist-state
Persisting React state between route navigation for next.js | 即使 next.js 页面间跳转仍能使组件保持数据

## usage | 用法

```
import persist from 'react-persist-state'

const connect = persist({
  defaultState: { test: '' }
})

const TestPersist = ({ testProp, setPersist, persisted }) => {
  return (<div>
    <p>testProp:{JSON.stringify(testProp)}</p>
    <p>persisted.test:<input value={persisted.test} onChange={(e) => {
      setPersist({ test: e.target.value })
    }} /></p>
    <p>persisted.test:{JSON.stringify(persisted.test)}</p>
  </div>)
}

export default connect(TestPersist)
```

when you route, `persisted` will keep | 当你切换页面，`persisted`

## test | 测试

```
git clone https://github.com/postor/react-persist-state.git
cd react-persist-state
yarn && yarn test
```

open http://localhost:3000

## params | 参数

persist

pass in config and return `connect` | 传入配置，并返回 `connect`

```
import persist from 'react-persist-state'
const connect = persist({
  maxAge: 0,          // timeout(miliseconds) for unmounted persist, 0 means no timeout | 超时时间（毫秒），0表示不限
  defaultState: {},   // default persisted state | 默认 state
  onUpdate: (key, Comp, newState) => {} // use this hook if you need to know each change | 数据更新的钩子
})
```
connect 

HOC that generates Components can persist | 返回能够保持状态的组件的 HOC

- Comp the component will need to persist state | Comp 参数为需要保持状态的组件
- key default is Comp, when you use the same connect and the same Comp multiple times(e.g. list), you need to specify a key for each of the | key 默认为 Comp，如果你使用同一个 connect 多次连接相同的 Comp （例如列表的情况），你需要给每个连接指定一个不同的 key

```
connect(Comp,key)

[1, 2, 3, 4].map((i) => {
  const InputItemK = connect(InputItem, `InputItem-${i}`)
  return (<InputItemK key={i} />)
})
```

props.setPersist

update persisted data | 更新保持的数据

- obj use as reducer if obj is function, else act like setState in react | 如果是函数，则用作reducer，否则和 react 的 setState 行为一致

```
const TestPersist = ({ setPersist, persisted }) => {
  ...
  <a onClick={()=>setPersist(obj)}>
```

props.persisted

data that persisited | 保持的数据

```
const TestPersist = ({ setPersist, persisted }) => {
  ...
  <p>{persisted.something}</p>
```

clearCache 

clear cached data when you need memory efficient | 清理缓存数据

```
connect.clearCache()
```

