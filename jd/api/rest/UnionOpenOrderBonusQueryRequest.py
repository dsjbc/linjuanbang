from jd.api.base import RestApi

class UnionOpenOrderBonusQueryRequest(RestApi):
		def __init__(self,domain='gw.api.360buy.com',port=80):
			RestApi.__init__(self,domain, port)
			self.orderReq = None

		def getapiname(self):
			return 'jd.union.open.order.bonus.query'






