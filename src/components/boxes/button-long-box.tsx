import { PlusCircleOutlined } from '@ant-design/icons'


export function ButtonLongBox({styles, setOpenResponsive}:{styles:any, setOpenResponsive:any, text?:any}) {
  return (
    <div style={styles.addButton} onClick={() => setOpenResponsive(true)}>
        <PlusCircleOutlined style={styles.icon} />
        <p>Add new service</p>
      </div>
  )
}
