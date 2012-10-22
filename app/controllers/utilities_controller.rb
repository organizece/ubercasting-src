class UtilitiesController < ActionController::Base

  def find_cep
    success = 1
    @address_search = BuscaEndereco.cep params[:cep]
    address = @address_search[:tipo_logradouro] + ' ' + @address_search[:logradouro]
    neighborhood = @address_search[:bairro]
    city = @address_search[:cidade]
    state = @address_search[:uf]
    rescue
      success = 0
    ensure
      data = {success: success, 
              address: address,
              neighborhood: neighborhood, 
              city: city, 
              state: state}
    render json: data.to_json 
  end

end