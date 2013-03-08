module ApplicationHelper

  def states
    states = []
    STATES.each { |state|
        states << [t(state, scope: :states), state]
    }
    
    states
  end

  def itens_per_page
    itens_per_page = []
    ITENS_PER_PAGE.each do |per_page|
      itens_per_page << [per_page, per_page]
    end

    itens_per_page
  end

  def start_year
      Time.now.year
  end

  def end_year
    1900
  end

  def default_year
    #Time.now.years_ago(18)
    Time.now
  end

  def flash_css_class(name)
    css_class = "alert"
    css_class += " alert-success" if name == :notice
    css_class += " alert-error" if name == :error

    css_class 
  end

end
