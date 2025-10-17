import { topNFTData } from 'Data/Dashboard/NFT'
import Image from 'next/image'
import { Href, ImgPath } from 'utils/Constant'

const TopNFTTableBody = () => {
  return (
    <tbody>
      {topNFTData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="product-content">
              <div className="order-image">
                <Image src={`${ImgPath}/dashboard-6/author/${data.imageName}.png`} alt="author" width={38} height={38}/>
                <Image width={15} height={15} src={`${ImgPath}/dashboard-6/author/mark.png`} className="mark-img" alt="mark icon"/>
              </div>
              <div>
                <h6 className="f-14 mb-0"><a href={Href}>{data.name}</a></h6>
                <span className="f-light f-12">{data.nfts}</span>
              </div>
            </div>
          </td>
          <td className="f-w-400">
            <div className="d-flex align-items-center">
              <Image className="me-2" height={20} width={13} src={`${ImgPath}/dashboard-6/nft.png`} alt="nft icon"/>
              <span>{data.amount}</span>
            </div>
          </td>
          <td className={`f-w-500 font-${data.fontClassName ?"danger":"success" }`}>
            <div className="d-flex align-items-center">
              {data.icon}<span>{data.value}</span>
            </div>
          </td>
          <td className="f-w-400 text-end">{data.items}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TopNFTTableBody