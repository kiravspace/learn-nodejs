function 환전(화폐, 대상통화){
  var 환율기준 = {'USD': 1100, 'KRW':1};

  // 환전 가능 화폐
  if(!(화폐.통화 in 환율기준) || !(대상통화 in 환율기준)){
    console.log('죄송합니다. 해당 화폐는 환전이 어렵습니다.');
    return;
  }

  var 환율 = 환율기준[화폐.통화] / 환율기준[대상통화];

  var 환전화폐 = 화폐.금액 * 환율;
  return 환전화폐;
};

module.exports.환전 = 환전;
module.exports.달러로얼마 = function(){
  var 환전금액 = 환전(this.자본, 'USD');
  return 환전금액;
}
