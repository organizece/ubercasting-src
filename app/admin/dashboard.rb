ActiveAdmin.register_page "Dashboard" do

  menu :priority => 1, :label => proc{ I18n.t("active_admin.dashboard") }

  content :title => proc{ I18n.t("active_admin.dashboard") } do
    div :class => "blank_slate_container", :id => "dashboard_default_message" do
      #span :class => "blank_slate" do
      #  span I18n.t("active_admin.dashboard_welcome.welcome")
      #  small I18n.t("active_admin.dashboard_welcome.call_to_action")
      #end
    end
    
    #Panel and Columns
    panel "Agencias" do
      table_for Agency.limit(10) do
        column "Agencia", :sortable => :name do |agency|
          link_to agency.name, admin_agency_path(agency)
        end
        column "Nome", :owner_name, :sortable => true
        column "Fone", :phone, :sortable => true
        column :email, :sortable => true
        column "Plano", :account_type, :sortable => true
        column "Periodo", :account_period, :sortable => true
        column "Criado Em", :created_at, :sortable => true
        column "Cancelavel Em", :subscription_cancellation_date, :sortable => true
        column "Ativo", :active, :sortable => true
      end
      strong { link_to "Ver Todas", admin_agencies_path  }
    end

    # Here is an example of a simple dashboard with columns and panels.
    #
    # columns do
    #   column do
    #     panel "Recent Posts" do
    #       ul do
    #         Post.recent(5).map do |post|
    #           li link_to(post.title, admin_post_path(post))
    #         end
    #       end
    #     end
    #   end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
